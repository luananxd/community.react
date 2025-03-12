import style from './main-page.module.scss'
// Components
import DefaultLayout from '@components/main/layout/DefaultLayout'
import DailyPicture from '@components/pictures/daily-picture/DailyPicture'

export default function MainPage() {
  return (
    <DefaultLayout content={() => (
      <div className={style['main-page']}>
        <DailyPicture></DailyPicture>
      </div>
    )}></DefaultLayout>
  )
}