import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from '@/shared/config/tests/componentRender/componentRender';

import { Sidebar } from './Sidebar';

describe('Sidebar tests', () => {
    test('toBeInTheDocument', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('test toggle', () => {
        componentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
