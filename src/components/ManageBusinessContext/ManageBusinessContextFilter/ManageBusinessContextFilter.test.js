import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ManageBusinessContextFilter from './ManageBusinessContextFilter';

describe('<ManageBusinessContextFilter />', () => {
    const mockData = [
        {
            "description": "mock desc 1",
            "externalCode": "code 1",
            "id": "bc1",
            "lastModifiedDate": "Mon Mar 19 14:00:00 EST 2019",
            "lastPublishedBy": null,
            "name": "mock name 1"
        },
        {
            "description": "mock desc 2",
            "externalCode": "code 2",
            "id": "bc2",
            "lastModifiedDate": "Tue Apr 20 18:00:00 EST 2020",
            "lastPublishedBy": null,
            "name": "mock name 2"
        }
    ],
        testProps = {
            data: new Map(mockData.map(item => [item.id, item])),
            setFilteredData: jest.fn()
        };

    it('renders ManageBusinessContextFilter component', () => {
        render(<ManageBusinessContextFilter {...testProps} />);

        const filter = screen.getByLabelText('filter');
        expect(filter).toBeInTheDocument();

        userEvent.type(filter, 'mock name 1');
        // expect(screen.getByLabelText('filter')).toHaveValue('mock name 1');
        console.log(screen.getByLabelText('filter'))
    });

    // it('', () => {
    //     render(<ManageBusinessContextFilter {...testProps} />);

    //     const filter = screen.getByLabelText('filter');
    //     userEvent.type(filter, 'mock name 1');

    //     expect(screen.getByLabelText('filter')).toHaveValue('mock name 1');
    // })
})