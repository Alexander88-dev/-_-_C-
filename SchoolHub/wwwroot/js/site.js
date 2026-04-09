// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
//Boolean b = true;
const button = document.getElementById("PasswordVisibilityB");

function togglePassword() {
    const input = document.getElementById("PasswordVisibilityI").type;
    if (input.type == `password`)
    {
        input.type = `text`;
    }
    else
    {
        input.type = `password`;
    } 
}