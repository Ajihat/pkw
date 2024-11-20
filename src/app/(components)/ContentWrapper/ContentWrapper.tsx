type ConetnerWrapperProps = {
	children: React.ReactNode;
};

import styles from './ContentWrapper.module.css';

export const ContentWrapper = ({ children }: ConetnerWrapperProps) => {
	return <div className={styles.wrapper}>{children}</div>;
};
