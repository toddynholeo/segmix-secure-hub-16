# Configuração do Webhook para Google Sheets

Este guia explica como configurar o webhook para enviar os leads capturados pelo botão do WhatsApp diretamente para uma planilha do Google Sheets.

## Opção 1: Usando Zapier (Recomendado)

### Passo 1: Criar uma conta no Zapier
1. Acesse [zapier.com](https://zapier.com) e crie uma conta gratuita
2. Clique em "Create Zap"

### Passo 2: Configurar o Trigger (Gatilho)
1. Escolha "Webhooks by Zapier" como trigger
2. Selecione "Catch Hook"
3. Copie a URL do webhook fornecida (será algo como: `https://hooks.zapier.com/hooks/catch/XXXXX/YYYYY/`)

### Passo 3: Configurar a Action (Ação)
1. Escolha "Google Sheets" como action
2. Selecione "Create Spreadsheet Row"
3. Conecte sua conta do Google
4. Escolha a planilha e aba onde os dados serão salvos
5. Mapeie os campos:
   - Nome → Campo "name"
   - Telefone → Campo "phone" 
   - Data/Hora → Campo "timestamp"
   - Origem → Campo "source"
   - URL da página → Campo "url"

### Passo 4: Configurar no projeto
1. Crie um arquivo `.env` na raiz do projeto (se não existir)
2. Adicione a variável: `VITE_GOOGLE_SHEETS_WEBHOOK=sua_url_do_webhook_aqui`
3. Ou edite o arquivo `src/config/whatsapp.ts` e cole a URL diretamente

### Passo 5: Testar
1. Publique o Zap no Zapier
2. Teste o botão do WhatsApp no seu site
3. Verifique se os dados aparecem na planilha

## Opção 2: Usando Google Apps Script

### Passo 1: Criar uma planilha no Google Sheets
1. Crie uma nova planilha
2. Adicione as colunas: Nome, Telefone, Data/Hora, Origem, URL

### Passo 2: Criar o script
1. Na planilha, vá em Extensões > Apps Script
2. Cole o seguinte código:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    data.name,
    data.phone,
    data.timestamp,
    data.source,
    data.url
  ]);
  
  // Opcional: Enviar email de notificação  
  if (data.name && data.phone) {
    GmailApp.sendEmail(
      'seu-email@exemplo.com',
      'Novo lead WhatsApp',
      `Nome: ${data.name}\nTelefone: ${data.phone}\nData: ${data.timestamp}`
    );
  }
  
  return ContentService.createTextOutput('Success');
}
```

### Passo 3: Implantar
1. Clique em "Implantar" > "Nova implantação"
2. Tipo: "Aplicativo da web"
3. Executar como: "Eu"
4. Acesso: "Qualquer pessoa"
5. Copie a URL fornecida

### Passo 4: Configurar no projeto
1. Cole a URL no arquivo `src/config/whatsapp.ts` ou na variável de ambiente

## Configurações Adicionais

### Personalizar número do WhatsApp
Edite o arquivo `src/config/whatsapp.ts` e altere o campo `phoneNumber` para seu número.

### Personalizar mensagem padrão
Edite a função `defaultMessage` no mesmo arquivo.

## Testando a Integração

1. Acesse seu site
2. Clique no botão flutuante do WhatsApp
3. Preencha o formulário
4. Verifique se:
   - Os dados apareceram na planilha
   - O WhatsApp foi aberto com a mensagem
   - (Se configurado) Você recebeu email de notificação

## Solução de Problemas

### Dados não aparecem na planilha
- Verifique se a URL do webhook está correta
- Teste a URL do webhook manualmente
- Verifique os logs do console do navegador

### Erro de CORS
- Se usando Google Apps Script, certifique-se de que está implantado como "aplicativo da web"
- O código já usa `mode: "no-cors"` para evitar problemas

### WhatsApp não abre
- Verifique se o número está no formato correto (código do país + DDD + número)
- Teste em dispositivos diferentes (mobile funciona melhor)