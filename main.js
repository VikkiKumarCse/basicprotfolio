var form = document.getElementById('sheetdb-form');
        form.addEventListener("submit", e => {
            e.preventDefault();
            fetch(form.action, {
                method: "POST",
                body: new FormData(document.getElementById("sheetdb-form")),
            }).then(
                response => response.json()
            ).then((html) => {
                alert('Submitted !! 😊 Thank you ' + document.getElementById('CName').value)
                window.location.href = '';
                location.reload();
            });
        });