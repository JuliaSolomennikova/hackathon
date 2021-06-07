import React from 'react';
import ChristmasTree from '../ChristmasTree/ChristmasTree';
import styles from './style.css';
import Memory from '../Memory/Memory'

export default class App extends React.Component {
    render () {
        return (
            <div className={styles.app}>
                <div className={styles.treeWrapper}>
                    <ChristmasTree />
                </div>
                <Memory mode={'easy'}/>
            </div>
        );
    }
}