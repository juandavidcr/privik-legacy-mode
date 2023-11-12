#include<stdio.h>
int main()
{
    int opc;
    float a,l,b,h,r,pi;
    printf("Programa que calcula el area de un cuadro, triangulo y circulo\n");
    printf("-----------------------------------------------------------------\n");
    printf("Menu\n\n");
    printf("1.- Calcular el area del cuadrado\n\n");
    printf("2.- Calcular el area del triangulo\n\n");
    printf("3.- Calcular el area del circulo\n\n");
    printf("Selecciona un numero\n");
    scanf("%d",&opc);
    switch(opc)
    {
               case 1: printf("\n\nDame el lado: ");
                       scanf("%f",&l);
                       a=l*l;
                       printf("\n\na: %f ",a);
                       break;
               
               case 2: printf("\n\nDame la altura: ");
                       scanf("%f",&h);
                       printf("\n\nDame la base: ");
                       scanf("%f",&b); 
                       a=(b*h)/2;
                       printf("\n\na: %f ",a);
                       break;
                       
               case 3: printf("\n\nDame el radio: ");
                       scanf("%f",&r);
                       pi=3.1416;
                       a=pi*(r*r);
                       printf("\n\na: %f ",a);
                       break;
               
               default: printf("\n\nopción incorrecta ");
               break;
    }
    
    printf("\n\nfin de programa ");
    getch();
    return 0;
}           
    
