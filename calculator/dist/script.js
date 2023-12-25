document.addEventListener("DOMContentLoaded",
    function () {
        let input = document.getElementById('expression-field');
        input.value = '0';
        let buttons = document.querySelectorAll('.button');
        let expression = "";
        let openBracketCount = 0;
        let lastChar;
        let isNumber;

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

                    case '()':

                        lastChar = expression.slice(-1);
                        isNumber = /^[0-9]+$/.test(lastChar);

                        if((openBracketCount % 2 == 0) && (!isNumber) && (lastChar != ')')){
                            expression += '('
                            input.value = expression;
                            openBracketCount++;
                        } else if(openBracketCount % 2 == 1 && isNumber){
                            expression += ')'
                            input.value = expression;
                            openBracketCount++;
                        }
                    break;


                    case 'Del':
                        expression = expression.slice(0, -1);
                        input.value = expression;
                        break;

                    case 'AC':
                        expression = '';
                        input.value = '0';
                        openBracketCount = 0;
                        break;

                    default:
                        lastChar = expression.slice(-1);
                        const isOperator = ['+', '-', '*', '/'].includes(lastChar);
                        isNumber = /^[0-9]+$/.test(buttonText);

                        if ((!isNumber && !isOperator) || isNumber) {
                            expression += buttonText;
                            input.value = expression;
                        }
                }
            });
        });
    });


