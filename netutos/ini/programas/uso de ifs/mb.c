//SYDNEY MÁRQUEZ ESCOTO
//Descripción: 	Programa que lee una calificación numérica entre 0 y 100 introducida por el ususario, y la transforma en una de las siguientes notas alfabéticas:
//INSUFICIENTE (0-59)
//SUFICIENTE (60-75)
//BIEN (75-85)
//MUY BIEN (85-100)

#include <stdio.h>

int main()
{
        int nota;
        printf("Programa que calcula tu nota y dice si pasate o no rangos: de entre 0-100\n");
	printf("Cual es tu calificacion:\n");
	scanf("%d",&nota);
	   if(nota<50)
      	          printf("INSUFICIENTE");
             else
         	       if(nota<75)
            	            printf("SUFICIENTE");
                       else
            	            if(nota <85)
               	                 printf("BIEN");
                            else
                  	         printf("MUYBIEN");	
	
	return 1;
	system("pause");
}
