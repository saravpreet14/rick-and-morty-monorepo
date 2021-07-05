import styles from './widgets.module.css';

export default function widgets(props) {
    
    return (
        <>
            <div className={styles.main} onClick={() => console.log('background')}></div>
            {/* <div className={styles.grid}> */}
                <div className={[styles.fixed, styles.cell1].join(' ')} onClick={() => console.log('cell')}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corrupti reprehenderit ipsam quasi error minima praesentium, odit eveniet quaerat nesciunt quibusdam, fugiat sunt aspernatur asperiores doloremque a nemo distinctio voluptatem.</div>
                <div className={[styles.fixed, styles.cell2].join(' ')} onClick={() => console.log('cell')}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corrupti reprehenderit ipsam quasi error minima praesentium, odit eveniet quaerat nesciunt quibusdam, fugiat sunt aspernatur asperiores doloremque a nemo distinctio voluptatem.</div>
                <div className={[styles.fixed, styles.cell3].join(' ')} onClick={() => console.log('cell')}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corrupti reprehenderit ipsam quasi error minima praesentium, odit eveniet quaerat nesciunt quibusdam, fugiat sunt aspernatur asperiores doloremque a nemo distinctio voluptatem.</div>
                <div className={[styles.fixed, styles.cell4].join(' ')} onClick={() => console.log('cell')}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corrupti reprehenderit ipsam quasi error minima praesentium, odit eveniet quaerat nesciunt quibusdam, fugiat sunt aspernatur asperiores doloremque a nemo distinctio voluptatem.</div>
                <div className={[styles.fixed, styles.cell5].join(' ')} onClick={() => console.log('cell')}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corrupti reprehenderit ipsam quasi error minima praesentium, odit eveniet quaerat nesciunt quibusdam, fugiat sunt aspernatur asperiores doloremque a nemo distinctio voluptatem.</div>
                <div className={[styles.fixed, styles.cell6].join(' ')} onClick={() => console.log('cell')}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corrupti reprehenderit ipsam quasi error minima praesentium, odit eveniet quaerat nesciunt quibusdam, fugiat sunt aspernatur asperiores doloremque a nemo distinctio voluptatem.</div>
            {/* </div> */}
        </>
    );
}