// Dados simulados para os gráficos
document.addEventListener('DOMContentLoaded', function() {
    // Carregar os dados
    carregarDados();
    
    // Inicializar os gráficos
    inicializarGraficos();
    
    // Configurar os filtros
    configurarFiltros();
});

// Função para carregar os dados (simulado)
function carregarDados() {
    console.log("Carregando dados simulados...");
    
    // Na implementação real, aqui faríamos chamadas para APIs ou
    // carregaríamos dados dos CSVs gerados
}

// Inicialização dos gráficos com dados mockados
function inicializarGraficos() {
    // Gráfico de faturamento por dia
    const revenueCtx = document.getElementById('revenueChart').getContext('2d');
    const revenueChart = new Chart(revenueCtx, {
        type: 'line',
        data: {
            labels: gerarDatasUltimos30Dias(),
            datasets: [{
                label: 'Faturamento (R$)',
                data: gerarDadosFaturamento(30),
                borderColor: '#ea1d2c',
                backgroundColor: 'rgba(234, 29, 44, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return 'R$ ' + context.parsed.y.toFixed(2).replace('.', ',');
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return 'R$ ' + value.toLocaleString('pt-BR');
                        }
                    }
                }
            }
        }
    });
    
    // Gráfico de status dos pedidos
    const orderStatusCtx = document.getElementById('orderStatusChart').getContext('2d');
    const orderStatusChart = new Chart(orderStatusCtx, {
        type: 'doughnut',
        data: {
            labels: ['Entregue', 'Cancelado', 'Em preparo', 'Em rota'],
            datasets: [{
                data: [65, 10, 15, 10],
                backgroundColor: [
                    '#28a745', // verde
                    '#dc3545', // vermelho
                    '#ffc107', // amarelo
                    '#17a2b8'  // azul
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            cutout: '70%'
        }
    });
    
    // Gráfico de tipos culinários
    const culinaryTypeCtx = document.getElementById('culinaryTypeChart').getContext('2d');
    const culinaryTypeChart = new Chart(culinaryTypeCtx, {
        type: 'bar',
        data: {
            labels: ['Fast Food', 'Pizza', 'Japonesa', 'Brasileira', 'Hambúrguer', 'Saudável'],
            datasets: [{
                label: 'Número de Pedidos',
                data: [120, 105, 95, 87, 72, 68],
                backgroundColor: 'rgba(234, 29, 44, 0.7)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    
    // Gráfico de métodos de pagamento
    const paymentMethodCtx = document.getElementById('paymentMethodChart').getContext('2d');
    const paymentMethodChart = new Chart(paymentMethodCtx, {
        type: 'pie',
        data: {
            labels: ['Cartão de crédito', 'PIX', 'Vale refeição', 'Cartão de débito', 'Dinheiro'],
            datasets: [{
                data: [45, 30, 12, 8, 5],
                backgroundColor: [
                    '#4e73df',
                    '#1cc88a',
                    '#36b9cc',
                    '#f6c23e',
                    '#e74a3b'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
    
    // Gráfico de desempenho por tipo culinário (tab restaurantes)
    const culinaryPerformanceCtx = document.getElementById('culinaryPerformanceChart').getContext('2d');
    const culinaryPerformanceChart = new Chart(culinaryPerformanceCtx, {
        type: 'radar',
        data: {
            labels: ['Avaliação Média', 'Volume de Pedidos', 'Ticket Médio', 'Tempo de Entrega', 'Taxa de Recompra'],
            datasets: [
                {
                    label: 'Fast Food',
                    data: [3.8, 4.9, 3.2, 4.8, 4.1],
                    borderColor: '#4e73df',
                    backgroundColor: 'rgba(78, 115, 223, 0.2)'
                },
                {
                    label: 'Japonesa',
                    data: [4.5, 3.7, 4.8, 3.5, 4.2],
                    borderColor: '#1cc88a',
                    backgroundColor: 'rgba(28, 200, 138, 0.2)'
                },
                {
                    label: 'Pizza',
                    data: [4.1, 4.3, 3.9, 3.2, 3.8],
                    borderColor: '#e74a3b',
                    backgroundColor: 'rgba(231, 74, 59, 0.2)'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    min: 0,
                    max: 5,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });
    
    // Gráfico de top restaurantes (tab restaurantes)
    const topRestaurantsCtx = document.getElementById('topRestaurantsChart').getContext('2d');
    const topRestaurantsChart = new Chart(topRestaurantsCtx, {
        type: 'bar',
        data: {
            labels: ['Rest 42', 'Rest 18', 'Rest 7', 'Rest 29', 'Rest 13', 'Rest 38', 'Rest 4', 'Rest 22', 'Rest 11', 'Rest 33'],
            datasets: [{
                label: 'Número de Pedidos',
                data: [412, 387, 352, 314, 301, 295, 287, 274, 268, 255],
                backgroundColor: 'rgba(234, 29, 44, 0.8)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Configurar os eventos dos filtros
function configurarFiltros() {
    document.getElementById('dateRange').addEventListener('change', refreshDashboard);
    document.getElementById('cityFilter').addEventListener('change', refreshDashboard);
    document.getElementById('culinaryFilter').addEventListener('change', refreshDashboard);
}

// Função chamada quando os filtros são aplicados
function refreshDashboard() {
    // Mostrar um indicador de carregamento
    console.log("Aplicando filtros e atualizando dashboard...");
    
    // Simular tempo de carregamento (numa implementação real teríamos uma chamada de API)
    setTimeout(() => {
        // Atualizar os dados dos gráficos com base nos filtros
        atualizarDadosComFiltros();
        
        // Atualizar os KPIs
        atualizarKPIs();
        
        // Mostrar uma mensagem de sucesso
        console.log("Dashboard atualizado com sucesso!");
    }, 800);
}

// Função para atualizar os dados com base nos filtros
function atualizarDadosComFiltros() {
    // Em uma implementação real, faríamos chamadas para o backend
    // ou filtraramos os dados localmente com base nos filtros selecionados
    
    // Para a POC, apenas atualizamos os gráficos com novos dados aleatórios
    const revenueChart = Chart.getChart('revenueChart');
    if (revenueChart) {
        revenueChart.data.datasets[0].data = gerarDadosFaturamento(30);
        revenueChart.update();
    }
    
    const orderStatusChart = Chart.getChart('orderStatusChart');
    if (orderStatusChart) {
        orderStatusChart.data.datasets[0].data = [
            randomInt(55, 75), // Entregue
            randomInt(5, 15),  // Cancelado
            randomInt(10, 20), // Em preparo
            randomInt(5, 15)   // Em rota
        ];
        orderStatusChart.update();
    }
    
    // Atualizar outros gráficos de maneira similar...
}

// Função para atualizar os KPIs
function atualizarKPIs() {
    // Em uma implementação real, esses valores viriam do backend
    // com base nos dados filtrados
    
    // Valores aleatórios para a POC
    document.querySelector('.metrics-container .metric-value:nth-child(1)').innerText = 
        'R$ ' + formatarValor(randomInt(35000, 55000) + Math.random() * 1000);
    
    const totalPedidos = randomInt(450, 550);
    document.querySelector('.metrics-container .metric-box:nth-child(2) .metric-value').innerText = 
        totalPedidos;
    
    const ticketMedio = (randomInt(7500, 9500) / 100).toFixed(2);
    document.querySelector('.metrics-container .metric-box:nth-child(3) .metric-value').innerText = 
        'R$ ' + ticketMedio.replace('.', ',');
    
    const avaliacaoMedia = (randomInt(38, 45) / 10).toFixed(1);
    document.querySelector('.metrics-container .metric-box:nth-child(4) .metric-value').innerText = 
        avaliacaoMedia;
}

// Função para gerar datas dos últimos N dias
function gerarDatasUltimos30Dias() {
    const datas = [];
    const hoje = new Date();
    
    for (let i = 29; i >= 0; i--) {
        const data = new Date();
        data.setDate(hoje.getDate() - i);
        datas.push(data.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }));
    }
    
    return datas;
}

// Função para gerar dados de faturamento aleatórios
function gerarDadosFaturamento(dias) {
    const dados = [];
    let tendencia = randomInt(800, 1500);
    
    for (let i = 0; i < dias; i++) {
        // Simular uma tendência com alguma aleatoriedade
        tendencia = Math.max(500, Math.min(3000, tendencia + randomInt(-200, 200)));
        dados.push(tendencia);
    }
    
    return dados;
}

// Função para formatar valores monetários
function formatarValor(valor) {
    return valor.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Gerar número aleatório entre min e max
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para alternar entre visualização padrão e cumulativa
function toggleCumulative() {
    const chart = Chart.getChart('revenueChart');
    if (!chart) return;
    
    const isCumulative = document.getElementById('cumulativeToggle').checked;
    
    if (isCumulative) {
        // Converter dados para cumulativos
        const originalData = chart.data.datasets[0].data;
        const cumulativeData = [];
        let acumulado = 0;
        
        for (let i = 0; i < originalData.length; i++) {
            acumulado += originalData[i];
            cumulativeData.push(acumulado);
        }
        
        chart.data.datasets[0].data = cumulativeData;
        chart.options.scales.y.beginAtZero = false;
    } else {
        // Restaurar dados originais
        chart.data.datasets[0].data = gerarDadosFaturamento(30);
        chart.options.scales.y.beginAtZero = true;
    }
    
    chart.update();
}

// Adicionar dados IA para simular a seção de insights
function atualizarInsightsIA() {
    // Em uma implementação real, esses insights viriam de um backend
    // com modelos de IA processando os dados
    
    // Para a POC, mantemos os insights estáticos pré-definidos
}
