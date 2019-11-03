var modal = document.getElementById("myModal");
        var btn = document.getElementById("myBtn");

        var span = document.getElementsByClassName("close")[0];

        document.getElementById("contact").addEventListener('click',(e) => {
            modal.style.display = "grid";
        });
        span.onclick = function() {
            modal.style.display = "none";
        }
        document.getElementById('submit').addEventListener('click',(e) => {

            modal.style.display = "none";            
});