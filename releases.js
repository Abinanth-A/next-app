// Single source of truth for Next app releases
const RELEASES_DATA = [
    {
        version: "v1.1.8",
        date: "19 October 2026",
        isLatest: true,
        groups: [
            {
                type: "New",
                items: [
                    'Complete task button on reminder notifications: mark a task done straight from the notification, and its reminders stop.',
                    'Swipe to browse: on the Today screen, swipe the task card to browse everything due today.',
                    "Update reminder: a quiet monthly nudge to check What's new, which you can turn off in Settings."
                ]
            },
            {
                type : "Improved",
                items: [
                    "The Today screen now shows only tasks due today, with a note when overdue tasks are waiting in Tasks.",
                    "The home screen widget no longer shows tomorrow's tasks."
                ]
            }
        ]
    },
    {
        version: "v1.1.7",
        date: "18 October 2026",
        isLatest: false,
        groups: [
            {
                type: "New",
                items: [
                    'A new row on the About screen that opens this page, so you can see what changed in each version and download the latest one.'
                ]
            }
        ]
    },
    {
        version: "v1.1.6",
        date: "17 October 2026",
        isLatest: false,
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
        date: "14 October 2026",
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
