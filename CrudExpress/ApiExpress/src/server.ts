import app from './app';

function main(){
  try {
    app.listen(3000, function (){
      console.log('Servidor funcionando!')
    })
  } catch (error) {
    console.log('Deu ruim')
  }
}

main()