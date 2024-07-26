let slideIndex = 1; //Definido que a variável de nome SlideIndex terá valor 1, o slide será exibido a partir de 1
showSlides(slideIndex); // Função ShowSlides terá a variável SlideIndex como argumento  

function plusSlides(n) {  //Cria a função plusSlides que irá receber o parâmetro "n"
    showSlides(slideIndex += n); // Quando exibir os slides é adicionado o parâmetro "n", ou seja, mostra o slide 1
}

function currentSlide(n) { //Cria a função currentSlide que pode pegar o parâmetro "n"
    showSlides(slideIndex = n); //Coloca o SlideIndex como sendo igual a "n" e o ShowSlide fica com novo valor
}

function showSlides(n) { //Chama a função de exibição dos slides, que tem parâmetro "n" para mostrar o slide 
    let i;  //Cria a variável "i"
    let slides = document.getElementsByClassName("mySlides"); //Cria uma variável para os slides contidos em "Myslides" e é colocado o nome de Slides nesta variável
    let pontos = document.getElementsByClassName("ponto"); //Cria uma variável para os pontos contidos em "pontos" e é colocado o nome de ponto nesta variável

    if (n > slides.length) { //Utiliza a condição "If", se o parâmetro n for menor que a variável "mySlide"
        slideIndex = 1 //O SlideIndex 1 será exibido
    }
    
    if (n < 1) { //Se o parâmetro "n" for menor que 1
        slideIndex = slides.length //Atribui que se isso ocorrer, retorna para o "Slide.lenght", ou seja, os slides começarão do início
    }
    
    for (i = 0; i < slides.length; i++) { //Usa a variável "i" e atribui  o valor "0", caso "i" seja menor que a quantidade de slides, itera entre eles
        slides[i].style.display = "none"; //Atribui que o display seja "none", ou seja, que os outros ítens sejam removidos
    }
    
    for (i = 0; i < pontos.length; i++) { //Usa a variável "i" e atribui  o valor "0", caso "i" seja menor que a quantidade de pontos, itera entre eles
        pontos[i].className = pontos[i].className.replace(" active", ""); //Atribui "pontos[i].className" a "pontos[i].className.replace", que substitui o "active" por uma string vazia 
    }
    
    slides[slideIndex - 1].style.display = "block"; //Adicionado índice "SlideIndex - 1" ao slide e ajusta o display para "block"
    
    pontos[slideIndex - 1].className += " active"; //Adiciona o mesmo índice de slides em pontos
}


/* O JavaScript atua no controle dos slides a serem exibidos, nos botões próximo e anterior é possível realizar este controle.
É possível realizar o controle também pelos pontos, de modo que ao clicar sobre um determinado ponto, será exibido um determinado
 slide para o usuário e, com esta seleção, o ponto muda sua cor*/