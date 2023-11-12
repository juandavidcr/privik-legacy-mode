#include<stdio.h>
#include<stdlib.h>

int main(void)
{
    int i,m,total;
    printf("Tabla de multiplicar\n\n\n");
    printf("Dame la tabla de multiplicar: ");
    scanf("%d",&m);
    
    for(i=1;i<=10;i++)
    {
    
     total=i*m;
     printf("\n%d x %d= %d\n",i,m,total);
    
    }
    
     printf("\n\nfin de programa ");
    getch();
    return 0;
}
