document.addEventListener("DOMContentLoaded",
    function () {
        let input = document.getElementById('expression-field');
        input.value = '0';
        let buttons = document.querySelectorAll('.button');
        let expression = "";
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                const buttonText = e.target.innerText;



                switch (buttonText) {
                    case '=':
                        try {
                            expression = eval(expression);
                            input.value = expression;
                            expression = input.value;
                        } catch (error) {
                            input.value = 'Error';
                        }
                        break;

                    case 'Del':
                        expression = expression.slice(0, -1);
                        input.value = expression;
                        break;

                    case 'AC':
                        expression = '';
                        input.value = '';
                        break;

                    default:
                        const lastChar = expression.slice(-1);//*

                        const isOperator = ['+', '-', '*', '/'].includes(lastChar);

                        const isNumber = /^[0-9]+$/.test(buttonText);

                        if ((!isNumber && !isOperator) || isNumber) {
                            expression += buttonText;
                            input.value = expression;
                        }
                }
            });
        });
    });


