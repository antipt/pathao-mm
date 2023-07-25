     // Execute the code after the page has loaded
        window.addEventListener("load", function() {
            // Find the element with class "external-login-button-label"
            const labelElement = document.querySelector(".external-login-button-label");
            
            // Check if the element exists and its text is "GitLab"
            if (labelElement && labelElement.textContent === "GitLab") {
                // Replace the text with "Google"
                labelElement.textContent = "Google";
            }
        });
