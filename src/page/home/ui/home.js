import { Editor } from 'widget/editor/ui/editor'
import { Toolbar } from 'widget/toolbar/ui/toolbar'
import { Canvas } from 'widget/canvas/ui/canvas'
import { useHomeListener } from '../lib/useHomeListener'
import { useLoad } from '../lib/useLoad'
import style from './style.module.css'

export const Home = () => {
  useHomeListener()
  useLoad()

  return (
    <>
      <h1 style={{ visibility: 'hidden', height: 0 }}>codemap</h1>
      <div className={style.wrapper}>
        <Editor />
        <div className={style.right}>
          <Toolbar />
          <Canvas />
        </div>
      </div>
    </>
  )
}
