import { Header } from "@/components/layout/Header"
import { getSettings } from "@/actions/settings"
import { SettingsClient } from "@/components/settings/SettingsClient"

export default async function SettingsPage() {
    const settings = await getSettings()

    return (
        <>
            <Header title="Settings" />
            <div className="p-4 md:p-6">
                <SettingsClient settings={settings} />
            </div>
        </>
    )
}
