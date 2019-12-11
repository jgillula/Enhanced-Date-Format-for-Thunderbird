Preferences.addAll([
    { id: "extensions.enhancedDateFormatter.useCustomFormatsForDateColumn", type: "bool" },
    { id: "extensions.enhancedDateFormatter.useCustomFormatsForReceivedColumn", type: "bool" },
    { id: "extensions.enhancedDateFormatter.useCustomFormatsForMessagePane", type: "bool" },
    { id: "extensions.enhancedDateFormatter.defaultDateFormat", type: "string" },
    { id: "extensions.enhancedDateFormatter.useCustomFormatForToday", type: "bool" },
    { id: "extensions.enhancedDateFormatter.todayDateFormat", type: "string" },
    { id: "extensions.enhancedDateFormatter.useCustomFormatForYesterday", type: "bool" },
    { id: "extensions.enhancedDateFormatter.yesterdayDateFormat", type: "string" },
    { id: "extensions.enhancedDateFormatter.useCustomFormatForLastWeek", type: "bool" },
    { id: "extensions.enhancedDateFormatter.lastWeekDateFormat", type: "string" },
]);

function setDisabledOrEnabled(ids, value) {
    if(value) {
        for (let id of ids) {
            document.getElementById(id).removeAttribute("disabled");
        }
    } else {
        for (let id of ids) {
            document.getElementById(id).setAttribute("disabled", "true");
        }        
    }
}

EnhancedDateFormatter.adjustDisabledStates = function() {
    setDisabledOrEnabled(["label_defaultDateFormat", "description_defaultDateFormat", "textbox_defaultDateFormat",
                          "checkbox_useCustomFormatForToday",
                          "checkbox_useCustomFormatForYesterday",
                          "checkbox_useCustomFormatForLastWeek"],
                         document.getElementById("checkbox_useCustomFormatsForDateColumn").checked |
                         document.getElementById("checkbox_useCustomFormatsForReceivedColumn").checked |
                         document.getElementById("checkbox_useCustomFormatsForMessagePane").checked);

    setDisabledOrEnabled(["label_todayDateFormat", "textbox_todayDateFormat"],
                         (document.getElementById("checkbox_useCustomFormatsForDateColumn").checked |
                          document.getElementById("checkbox_useCustomFormatsForReceivedColumn").checked |
                          document.getElementById("checkbox_useCustomFormatsForMessagePane").checked) &
                         document.getElementById("checkbox_useCustomFormatForToday").checked)

    setDisabledOrEnabled(["label_yesterdayDateFormat", "textbox_yesterdayDateFormat"],
                         (document.getElementById("checkbox_useCustomFormatsForDateColumn").checked |
                          document.getElementById("checkbox_useCustomFormatsForReceivedColumn").checked |
                          document.getElementById("checkbox_useCustomFormatsForMessagePane").checked) &
                         document.getElementById("checkbox_useCustomFormatForYesterday").checked)

    setDisabledOrEnabled(["label_lastWeekDateFormat", "textbox_lastWeekDateFormat"],
                         (document.getElementById("checkbox_useCustomFormatsForDateColumn").checked |
                          document.getElementById("checkbox_useCustomFormatsForReceivedColumn").checked |
                          document.getElementById("checkbox_useCustomFormatsForMessagePane").checked) &
                         document.getElementById("checkbox_useCustomFormatForLastWeek").checked)

}


EnhancedDateFormatter.onPrefWindowLoad = function () {
    EnhancedDateFormatter.adjustDisabledStates();
}


