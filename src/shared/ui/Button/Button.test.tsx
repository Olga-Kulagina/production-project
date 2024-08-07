import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Button tests', () => {
    test('toBeInTheDocument', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('toHaveClass', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
