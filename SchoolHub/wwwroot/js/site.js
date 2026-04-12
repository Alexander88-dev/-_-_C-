// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
//Boolean b = true;

function togglePassword(inputId, button)
{
    const input = document.getElementById("PasswordVisibilityI");
    if (input.type === "password")
    {
        input.type = "text";
        button.textContent = "Скрыть"
    }
    else
    {
        input.type = "password";
        button.textContent = "Показать"
    } 
}