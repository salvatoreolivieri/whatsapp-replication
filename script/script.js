
const app = new Vue({

  el: "#app",

  data: {

    contacts: [

      {
          name: 'Leonardo Da Vinci',
          avatar: '_1',
          visible: true,
          messages: [
              {
                  date: '10/01/2020 15:30:55',
                  message: 'Grande Leo! Come stai?',
                  status: 'sent'
              },
              {
                  date: '10/01/2020 15:32:00',
                  message: 'Ho sentito Lisa e mi ha detto che siete assieme verso sera, ci vediamo tutti insieme che mi fate vedere qualche altra opera e mi dai qualche consiglio di pittura?',
                  status: 'sent'
              },
              {
                  date: '10/01/2020 16:15:22',
                  message: 'Ciao bello, sto alla grande, si vieni pure! ',
                  status: 'received'
              }
          ],
      },

      {
          name: 'Dave The Lego',
          avatar: '_2',
          visible: true,
          messages: [
              {
                  date: '20/03/2020 16:30:00',
                  message: 'Ehi Dave sei con Trevor?',
                  status: 'sent'
              },
              {
                  date: '20/03/2020 16:30:55',
                  message: 'No lo vedo domani, vuoi venire?',
                  status: 'received'
              },
              {
                  date: '20/03/2020 16:35:00',
                  message: 'Mi piacerebbe ma domani non posso, ho allenamento.',
                  status: 'sent'
              }
          ],
      },

      {
          name: 'Venere',
          avatar: '_3',
          visible: true,
          messages: [
              {
                  date: '28/03/2020 10:10:40',
                  message: 'Mamma sono con Botticelli stasera.',
                  status: 'received'
              },
              {
                  date: '28/03/2020 10:20:10',
                  message: 'Sicura di non aver sbagliato chat?',
                  status: 'sent'
              },
              {
                  date: '28/03/2020 16:15:22',
                  message: 'Ah scusa!',
                  status: 'received'
              }
          ],
      },

      {
          name: 'Trevor',
          avatar: '_4',
          visible: true,
          messages: [
              {
                  date: '10/01/2020 15:30:55',
                  message: 'Sai che ha aperto una nuova pizzeria?',
                  status: 'sent'
              },
              {
                  date: '10/01/2020 15:50:00',
                  message: 'Si, ma preferirei andare al cinema',
                  status: 'received'
              }
          ],
      },

      {
          name: 'Lisa',
          avatar: '_5',
          visible: true,
          messages: [
              {
                  date: '10/01/2020 15:30:55',
                  message: 'Ehi sei con Leo verso sera?',
                  status: 'sent'
              },
              {
                  date: '10/01/2020 15:50:00',
                  message: 'Sisi siamo insieme',
                  status: 'received'
              }
          ],
      },

      {
          name: 'Jacob',
          avatar: '_6',
          visible: true,
          messages: [
              {
                  date: '10/01/2020 15:30:55',
                  message: 'Ciao Jacob, hai fatto il provino da manichino?',
                  status: 'sent'
              },
              {
                  date: '10/01/2020 15:50:00',
                  message: 'Non ancora',
                  status: 'received'
              },
              {
                  date: '10/01/2020 15:51:00',
                  message: 'Dai poi fammi sapere!',
                  status: 'sent'
              }
          ],
      },

      {
          name: 'Jimmy',
          avatar: '_7',
          visible: true,
          messages: [
              {
                  date: '10/01/2020 15:30:55',
                  message: 'Dove sei?',
                  status: 'sent'
              },
              {
                  date: '10/01/2020 15:50:00',
                  message: 'Sto arrivando ciccio!',
                  status: 'received'
              }
          ],
      },

      {
          name: 'Aristotele',
          avatar: '_8',
          visible: true,
          messages: [
              {
                  date: '10/01/2020 15:30:55',
                  message: 'Ciao, andiamo a mangiare la pizza stasera?',
                  status: 'received'
              },
              {
                  date: '10/01/2020 15:50:00',
                  message: 'Vai così parliamo un po\' di filosofia',
                  status: 'sent'
              },
              {
                  date: '10/01/2020 15:51:00',
                  message: 'Grande Sal!!',
                  status: 'received'
              }
          ],
      }
    ],

    activeIndex: 0,

    newMessage: "",

    newResponse: "",

    searchInput: "",

    dark: false,

  },

  methods: {

    getImgUrl(index){
        return `media/avatar${this.contacts[index].avatar}.JPG`
    },

    activeMessage(index){
        this.activeIndex = index;
    },

    notificationAltert(){
        alert("Stai per attivare le notifiche desktop")
    },

    addNewMessage(){

        const newMessagePush = {
            date: this.getNow(),
            message: this.newMessage,
            status: "sent",
        }

       this.contacts[this.activeIndex].messages.push(newMessagePush);

       this.newMessage = "";

       this.addNewResponse()

    },

    addNewResponse(){

        const newResponse = {
            date:  this.getNow(),
            message: 'oks bro',
            status: 'received'
        }

        setTimeout(() => this.contacts[this.activeIndex].messages.push(newResponse), 3000);

    },

    getNow() {
        const today = new Date();
        const date = ('0' + today.getDate()).slice(-2) + '/' + ('0' + (today.getMonth()+1)).slice(-2) + '/' + today.getFullYear();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const dateTime = date +' '+ time;
        return dateTime;
    },

    filterContactList(){
        console.log("start search");
        // this.contacts[0].name.filter(this.searchInput)
    },


    darkMode(){

        const darkModeSoundOn = new Audio("../sound/switch-on.mp3")
        const darkModeSoundOff = new Audio("../sound/switch-off.mp3")
        darkModeSoundOn.volume = 1;
        // darkModeSoundOn.play();

        if (this.dark){
            darkModeSoundOff.play();
            this.dark = !this.dark
        } else{
            darkModeSoundOn.play();
            this.dark = !this.dark
        }
        
        console.log(this.dark);
    }

  },


})

