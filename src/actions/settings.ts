'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { SettingsFormData, settingsSchema } from '@/lib/validators'
import { requireAuth } from '@/lib/auth'

export type Settings = {
    company_name: string
    currency_code: string
    email_address: string
    address: string
    phone: string
    website: string
    timezone: string
}

const defaultSettings: Settings = {
    company_name: 'My Finance',
    currency_code: '$',
    email_address: '',
    address: '',
    phone: '',
    website: '',
    timezone: 'America/Chicago',
}

export async function getSettings(): Promise<Settings> {
    const user = await requireAuth()

    const settings = await prisma.settings.findMany({
        where: { userId: user.id },
    })

    const settingsMap: Settings = { ...defaultSettings }

    for (const setting of settings) {
        if (setting.key in settingsMap) {
            settingsMap[setting.key as keyof Settings] = setting.value
        }
    }

    return settingsMap
}

export async function getSetting(key: string): Promise<string> {
    const user = await requireAuth()

    const setting = await prisma.settings.findFirst({
        where: { key, userId: user.id },
    })

    return setting?.value || defaultSettings[key as keyof Settings] || ''
}

export async function updateSettings(data: SettingsFormData) {
    const user = await requireAuth()
    const parsed = settingsSchema.safeParse(data)
    if (!parsed.success) {
        const message = parsed.error.issues.map(e => `${e.path.join('.')}: ${e.message}`).join(', ')
        return { success: false, error: message }
    }
    const validated = parsed.data

    const entries = Object.entries(validated) as [string, string][]

    for (const [key, value] of entries) {
        await prisma.settings.upsert({
            where: {
                userId_key: {
                    userId: user.id,
                    key,
                },
            },
            update: { value: value || '' },
            create: {
                key,
                value: value || '',
                userId: user.id,
            },
        })
    }

    revalidatePath('/settings')
    revalidatePath('/') // Dashboard may show company name
    return { success: true }
}
