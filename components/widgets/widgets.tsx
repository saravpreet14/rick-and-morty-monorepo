import styles from './widgets.module.css';

export default function widgets(props) {
    
    return (
        <>
            <div className={styles.main} onClick={props.close}></div>
            <div className={[styles.fixed, styles.cell1].join(' ')} >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corrupti reprehenderit ipsam quasi error minima praesentium, odit eveniet quaerat nesciunt quibusdam, fugiat sunt aspernatur asperiores doloremque a nemo distinctio voluptatem.
            </div>
            <div className={[styles.fixed, styles.cell2].join(' ')} >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corrupti reprehenderit ipsam quasi error minima praesentium, odit eveniet quaerat nesciunt quibusdam, fugiat sunt aspernatur asperiores doloremque a nemo distinctio voluptatem.
            </div>
            <div className={[styles.fixed, styles.cell3].join(' ')} >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corrupti reprehenderit ipsam quasi error minima praesentium, odit eveniet quaerat nesciunt quibusdam, fugiat sunt aspernatur asperiores doloremque a nemo distinctio voluptatem.
            </div>
            <div className={[styles.fixed, styles.cell4].join(' ')} >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corrupti reprehenderit ipsam quasi error minima praesentium, odit eveniet quaerat nesciunt quibusdam, fugiat sunt aspernatur asperiores doloremque a nemo distinctio voluptatem.
            </div>
            <div className={[styles.fixed, styles.cell5].join(' ')} >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corrupti reprehenderit ipsam quasi error minima praesentium, odit eveniet quaerat nesciunt quibusdam, fugiat sunt aspernatur asperiores doloremque a nemo distinctio voluptatem.
            </div>
            <div className={[styles.fixed, styles.cell6].join(' ')} >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corrupti reprehenderit ipsam quasi error minima praesentium, odit eveniet quaerat nesciunt quibusdam, fugiat sunt aspernatur asperiores doloremque a nemo distinctio voluptatem.
            </div>
        </>
    );
}