import React, { useState, ReactElement } from 'react';
import styles from './ToggleButtonGroup.module.scss';

// Definindo o tipo das props, aceitando qualquer número de botões como filhos
interface ToggleButtonGroupProps {
    children: ReactElement[];
    initialIndex?: number;
}

const ToggleButtonGroup: React.FC<ToggleButtonGroupProps> = ({ initialIndex, children }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(initialIndex ?? null);

    const handleClick = (index: number, onClick?: () => void) => {
        setActiveIndex(index);
        if (onClick) onClick();
    };

    return (
        <div className={styles.buttonGroup}>
            {React.Children.map(children, (child, index) =>
                React.cloneElement(child, {
                    isActive: index === activeIndex, // Passa a prop isActive para o filho
                    onClick: () => handleClick(index, child.props.onClick),
                })
            )}
        </div>
    );
};

export default ToggleButtonGroup;
