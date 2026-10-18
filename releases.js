// Single source of truth for Next app releases
const RELEASES_DATA = [
    {
        version: "v1.1.6",
        date: "October 2026",
        isLatest: true,
        groups: [
            {
                type: "Fixed",
                items: [
                    'Tapping "Got it" on a reminder now stops all remaining reminders for that task. Previously some reminders could keep firing afterward.'
                ]
            }
        ]
    },
    {
        version: "v1.1.5",
        date: "October 2026",
        isLatest: false,
        groups: [
            {
                type: "New",
                items: [
                    "About Next: a new section in Settings that explains what Next is about.",
                    'A "Developed by Abinanth" credit on the About screen, the launch screen, and at the end of the task list.',
                    "Smaller download size."
                ]
            }
        ]
    },
    {
        version: "1.1.3 and earlier",
        date: "October 2026",
        isLatest: false,
        summary: "First public release."
    }
];

if (typeof window !== 'undefined') {
    window.RELEASES_DATA = RELEASES_DATA;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = RELEASES_DATA;
}
