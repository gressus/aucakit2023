<script>
  import { onMount, tick } from 'svelte';

  // Define an array of upcoming events
    // const events = []

  // import { Deta } from 'deta';
  // const deta = Deta("c08f3qnqxes_RUQwJXeiwU6wPGn8uspiknPeUpBcfKFZ");
  // const db = deta.Base('events'); // Make sure this matches your actual base name

  // let events = [];

  // fetchEvents(); // Fetch events when the script loads

  // async function fetchEvents() {
  //   try {
  //     const result = await db.fetch(); // Fetch all events from the base
  //     events = result.items;
  //     console.log(events);
  //     currentEvent = events[0]
  //   } catch (error) {
  //     console.error('Error fetching events:', error);
  //   }
  // }

  	export let data;    
    let events = data.events;

    let currentEvent = {}
    currentEvent = events[0]

    // const events = [
    //     {
    //         title: "Щелкунчик",
    //         subtitle: "Балет в 2-х актах на музыку П. И. Чайковского",
    //         date: "January 1, 2024",
    //         time: "18:00",
    //         image: "theNutcracker.jpg",
    //     },
    //     {
    //         title: "Лебединое озеро",
    //         subtitle: "Балет в 4-х актах на музыку П. И. Чайковского",
    //         date: "January 2, 2024",
    //         time: "19:00",
    //         image: "swanLake.jpg",
    //     },
    //     {
    //         title: "Спартак",
    //         subtitle: "Балет Арама Хачатуряна в 3-х актах",
    //         date: "January 3, 2024",
    //         time: "19:00",
    //         image: "spartacus.jpg",
    //     },
    //     {
    //         title: "Ромео и Джульетта",
    //         subtitle: "Балет в 3-х актах на музыку С. С. Прокофьева",
    //         date: "January 4, 2024",
    //         time: "19:00",
    //         image: "romeo.jpg",
    //     }
    //     // Add more events as needed
    // ];

    let currentIndex = 0;

  //   function updateEvent() {
  //     currentEvent = events[currentIndex]
  //       // // Get the event container
  //       // const eventContainer = document.getElementById("event-container");

  //       // // Get the current event
  //       // const currentEvent = events[currentIndex];

  //       // // Update the content of the event container
  //       // eventContainer.innerHTML = `
  //       //     <section id="event-container" class="hero" style="background-image: url('${currentEvent.image}');">
                
  //       //         <h2>${currentEvent.title}</h2>
  //       //         <p>${currentEvent.subtitle}</p>
  //       //         <a class="cta-button" href="#">Купить билет</a>
  //       //     </section>
  //       // `;

  //       // // Increment the index for the next event
  //       currentIndex = (currentIndex + 1) % events.length;
  //   }

    // let currentEvent = events[0]
    // let currentEvent = {}

  // onMount(async() => {
  //   // Set an interval to update the event every 5 seconds (5000 milliseconds)
  //   setInterval(updateEvent, 1000);
  
  //   // Initial call to display the first event
  //   // updateEvent();
  // })        
    
</script>


    <main>
      <section id="event-container">
          <div class="hero" style="background-image: url('{currentEvent.image}');">
              <h2>{currentEvent.title}</h2>
              <p>
                  {currentEvent.subtitle}
              </p>
              <a class="cta-button" href="#">Buy Tickets {currentEvent.price}$</a>
          </div>
      </section>
        

        <!-- <section id="event-container">
            <div class="hero" style="background-image: url('theNutcracker.jpg');">
                <h2>The Nutcracker</h2>
                <p>
                    Балет в 2-х актах на музыку П. И. Чайковского
                </p>
                <a class="cta-button" href="#">Buy Tickets</a>
            </div>
        </section>
         -->

        <section>
            <h2>Upcoming Events</h2>
    
            <div class="featured-events">
                <!-- Event Cards (Replace with your own content) -->
                <div class="event-card">
                    <!-- <img class="event-image" src="event1.jpg" alt="Event 1"> -->
                    <div class="event-details">
                        <h3>Event 1</h3>
                        <p>Date: January 1, 2023</p>
                        <p>Time: 7:00 PM</p>
                        <a class="cta-button" href="#">Buy Tickets</a>
                    </div>
                </div>
    
                <div class="event-card">
                    <!-- <img class="event-image" src="event2.jpg" alt="Event 2"> -->
                    <div class="event-details">
                        <h3>Event 2</h3>
                        <p>Date: February 14, 2023</p>
                        <p>Time: 8:00 PM</p>
                        <a class="cta-button" href="#">Buy Tickets</a>
                    </div>
                </div>
    
                <!-- Add more event cards as needed -->
            </div>
    
            <p style="text-align: center; margin-top: 2em;">
                <a class="cta-button" href="#">View All Events</a>
            </p>
        </section>
    </main>

   <style>
        :global(body) {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f8f8f8;
            position: relative;
        }

        /* header {
            background-color: #333;
            color: #fff;
            padding: 1em 0;
            text-align: center;
        } */

        .hero {
            display: flex;
            flex-direction: column;
            justify-content: end;
            align-items: start;
            height: 100vh;  
            color: white;
            /* background-image: linear-gradient(); */
            /* background-image: url("theNutcracker.jpg"); */
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            /* background-attachment: fixed; */
            padding: 50px; 
            box-sizing: border-box;
            gap: 20px;
        }
        .hero h2{
            font-size: 50px;
            /* margin-bottom: 10px;
            margin-top: 10px; */
        }
        * {
            box-sizing: border-box;
            margin: 0px;
            padding: 0px;
        }

        /* section {
            max-width: 1200px;
            margin: 2em auto;
            padding: 2em;
            background-color: #fff;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        } */

        .cta-button {
            display: inline-block;
            padding: 0.9em 2em;
            background-color: white;
            color: black;
            text-decoration: none;
            font-weight: bold;
            border-radius: 5px;
            transition: background-color 0.3s;
        }

        .cta-button:hover {
            background-color: #747474;
        }

        .featured-events {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
        }

        .event-card {
            max-width: 300px;
            border: 1px solid #ddd;
            border-radius: 5px;
            overflow: hidden;
            transition: transform 0.3s;
        }

        .event-card:hover {
            transform: scale(1.05);
        }

        .event-image {
            max-width: 100%;
            height: auto;
        }

        .event-details {
            padding: 1em;
        }
    </style>