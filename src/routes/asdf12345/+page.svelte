<script>
  import { onMount } from 'svelte';
  import { Deta } from 'deta';

  // Инициализация Deta Base
  const deta = Deta("c08f3qnqxes_EgznwZB5c3C5TATsgsE2ED8bPwY5GYet");
  const db = deta.Base('events');

  let performance = {
    key: '',
    date: '',
    image: '',
    subtitle: '',
    time: '',
    title: ''
  };

  onMount(async () => {
    await getPerformance();
  });

  async function getPerformance() {
    // Замените 'yourspecifickey' на конкретный ключ записи, которую хотите редактировать
    const data = await db.get('xhsdr71wapog');
    if (data) {
      performance = data;
    }
  }

  async function updatePerformance() {
    const updatedData = await db.put(performance);
    if (updatedData) {
      console.log('Performance updated successfully', updatedData);
      // Обработка успешного обновления, например, показ уведомления или редирект
    }
  }
</script>

<form on:submit|preventDefault={updatePerformance}>
  <h1>Редактирование Спектакля</h1>

  <label for="title">Название:</label>
  <input type="text" id="title" bind:value={performance.title} />

  <label for="date">Дата:</label>
  <input type="text" id="date" bind:value={performance.date} />

  <label for="image">Изображение (имя файла):</label>
  <input type="text" id="image" bind:value={performance.image} />

  <label for="subtitle">Подзаголовок:</label>
  <input type="text" id="subtitle" bind:value={performance.subtitle} />

  <label for="time">Время:</label>
  <input type="text" id="time" bind:value={performance.time} />

  <button type="submit">Обновить</button>
</form>


<style>
  :global(header) {
    display: none !important;
  }
</style>