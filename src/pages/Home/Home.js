import Card from "../../components/Card";

export default function Home() {
  const data = [
    {
      title: '1. Продвинутая работа с git',
      desc: 'Основные команды, ветвление и состояния в git, командная работа в git',
      link: 'lesson1'
    },
    {
      title: '2. Введение в JavaScript',
      desc: 'Переменные, типы данных, преобразование типов, встроенные функции браузера',
      link: 'lesson2'
    },
    {
      title: '3. Основы JavaScript',
      desc: 'Базовые операторы, условия, циклы, конструкция switch',
      link: 'lesson3'
    },
    {
      title: '4. Введение в функции',
      desc: 'Объявление и вызов, параметры и аргументы, ключевое слово return, функциональные выражения',
      link: 'lesson4'
    },
    {
      title: '5. Объекты',
      desc: 'Синтаксис и особенности, методы объекта, ключевое слово this',
      link: 'lesson5'
    },
    {
      title: '6. Массивы',
      desc: 'Синтаксис и особенности, методы массивов',
      link: 'lesson6'
    },
    {
      title: '7. Функции: продвинутый уровень',
      desc: 'Стрелочные функции, функции обратного вызова, продвинутая работа с массивами, функции конструкторы',
      link: 'lesson7'
    }
  ]
  return (
    <div className="flex flex-wrap m-4">
      {data.map((el) =>
        (<Card title={el.title} desc={el.desc} link={el.link} />)
      )}
    </div>
  )
}