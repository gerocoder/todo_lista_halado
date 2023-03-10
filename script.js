let todoNumber = 0;

$('#addTodo').click(() => {
    addLi($('#textTodo').val());
    $('#textTodo').val('');
});

$(document).keypress((event) => {
    if(event.keyCode === 13) {
        addLi($('#textTodo').val());
        $('#textTodo').val('');
    }
});

function addLi (textLi) {
    if (textLi.length > 0) {
        $('ul').append(
            `<li class="uncheckText" id="todoNumber${todoNumber}">
                <span class="listText">${textLi}</span>
                <span>
                    <img src="./icon/trash_icon.png" class="trashIcon">
                    <span class="checkIcon"></span>
                </span>
            </li>
            <script>
            $('#todoNumber${todoNumber}').click(() => {
                if ($('#todoNumber${todoNumber}').attr('class') === 'checkText') {
                    $('#todoNumber${todoNumber}').attr('class', 'uncheckText');
                } else {
                    $('#todoNumber${todoNumber}').attr('class', 'checkText');
                }
            })
            $('#todoNumber${todoNumber} .trashIcon').click(() => {
                if ($('#todoNumber${todoNumber}').attr('class') === 'uncheckText') {
                    $('#todoNumber${todoNumber}').remove();
                } else {
                    $('#todoNumber${todoNumber}').attr('class', 'uncheckText');
                }
            })
            </script>`
        )
        todoNumber++
    }
}
