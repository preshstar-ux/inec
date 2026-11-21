    
let button =
        document.getElementById("checkBtn");
        button.addEventListener("click", function()
        {
            let age =
            document.getElementById("age").value;
            if (age >=2026) {
                document.getElementById("result").textContent = "you are not eligible";
            }else {
                document.getElementById("result").textContent = "you are eligible";
            }
        });