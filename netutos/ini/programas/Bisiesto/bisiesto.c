#include <stdio.h>

int main(){
	//Declaracion de variables locales
	int year;
	char respuesta[1];
	printf("bienvenido!\n");
	printf("Este programa te pedira que ingreses un anio y te dira si es bisiesto.\n");

	do {
		printf("Escribe un a&ntilde;o:\n");
		scanf("%i", &year);
		/*Esta es la parte de la funcion que evalua una condicion dada:
		Un año es bisiesto cuando es divisible entre 4 pero no entre 100,
		a excepción de los años divisibles entre 400 (que tambien son bisiestos).*/
		if (((year % 4) == 0) && ((year % 100) != 0) || ((year % 400) == 0)) {
			printf ("Es un anio bisiesto!\n");
		}
		else {
			printf("No es anio bisiesto.\n");
		}
		printf("Quieres ingresar otro anio? (s/n):\n");
		scanf("%s", respuesta);
	}
	while (respuesta[0] == 's');//se evalua la condicion al final

		printf("Gracias por su preferencia!\n");
		return 0;
  system("pause");
}//Fin de funcion main
