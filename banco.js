class ContaBancaria {
   static voidmain(Stringargs) {
       // Criando instâncias das classes
       ContaBancariaconta1 = new ContaBancaria("João", 1000.00);
       ContaCorrenteconta2 = new ContaCorrente("Maria", 2000.00, 500.00);

       // Realizando operações nas contas
       conta1.depositar(5000.00);
       conta1.sacar(1000.00);
       conta1.mostrarSaldo();
       conta1.viapix(10.000);

       System.out.println(); // Adicionando linha em branco para separar as operações

       conta2.depositar(1000.00);
       conta2.sacar(2500.00); // Isso deve acionar o cheque especial
       conta2.mostrarSaldo();
       conta2.viapix(90.000);
   }
}