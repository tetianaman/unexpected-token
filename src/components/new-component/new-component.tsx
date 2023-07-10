import styles from './new-component.module.scss';
import classNames from 'classnames';

export const NewComponent = () => {
    const x = 'root';
    return <div className={classNames(x, styles.tania)}>NewComponent</div>;
};
