        let checkout = document.getElementById('checkout');
        console.log(checkout);

        checkout.addEventListener('change', function() {
            let data_saida = new Date(this.value);
            let data_entrada = new Date(document.getElementById('checkin').value);
            console.log(data_saida, data_entrada);
            let qtd_diarias = (data_saida - data_entrada) / 86400000;
            console.log(qtd_diarias);

            let preco_diaria = parseFloat(document.getElementById('preco_diaria').innerText.substring(2));
            console.log(preco_diaria);

            let subtotal = document.getElementById('subtotal');
            subtotal.innerHTML = "R$" + preco_diaria + " x " + qtd_diarias + " noites ";
            let valor_sub = document.getElementById('valor_sub');
            let valor_diarias = preco_diaria * qtd_diarias;
            valor_sub.innerHTML = "R$" +  valor_diarias;

            let taxa_servico = document.getElementById('taxa_servico');
            let valor_taxa_servico = 0.15 * valor_diarias;
            taxa_servico.innerHTML = "R$" + valor_taxa_servico;

            let taxa_limpeza = document.getElementById('taxa_limpeza');
            let valor_taxa_limpeza = parseFloat(taxa_limpeza.innerText.substring(2));
            console.log(valor_taxa_limpeza);

            let total = document.getElementById('total');
            total.innerHTML = "R$" + (valor_diarias + valor_taxa_servico + valor_taxa_limpeza);
            
        
            
        });