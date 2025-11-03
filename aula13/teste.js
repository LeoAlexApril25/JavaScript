let nota = 7
media = 0

do {
    console.log('Nota: ' + nota);
    nota ++;
} while ( nota <= 99)

media = (nota + nota) / 2

if(media <=59){
    console.log('Reprovado');
} else if(media <= 69){
    console.log('Recuperação');
} else{
    console.log('Aprovado');
}