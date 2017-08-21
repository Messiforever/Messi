
function load()
{
    (function () {
        var pNum = 1;
        function carrousel() {
            document.getElementById('image').src = 'img/img'+pNum+'.jpg';
            pNum++;
            if(pNum >= 8){
                pNum = 1;
            }
        }
        setInterval(carrousel,5000);
    })();
}