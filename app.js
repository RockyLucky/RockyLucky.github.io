const editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");

editor.session.on("change", () => {
    const code = editor.getValue();
    try {
        eval(code);
        document.getElementById("error").
