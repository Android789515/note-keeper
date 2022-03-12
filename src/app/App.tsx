import styles from './App.module.scss'

import Title from '../title/Title'
import CreateNoteBox from '../create-note-box/CreateNoteBox'
import Notes from '../notes/Notes'

const App = () => {
    return (
        <div className={styles.app} aria-label='App' role='application'>
            <Title />

            <CreateNoteBox />

            <Notes />
        </div>
    )
}

export default App