import catalogsPic from './images/catalogs.png';
import studentsPic from './images/students.png';
import coursesPic from './images/course.png';
import circulationPic from './images/circulation.png';
import historyPic from './images/history.png';

export const menuOptions = [
    {
        key: 'Catalogs',
        text: 'Catalogs',
        value: 'Catalogs',
        image: { avatar: true, src: catalogsPic }
    },
    {
        key: 'Patrons',
        text: 'Patrons',
        value: 'Patrons',
        image: { avatar: true, src: studentsPic }
    },
    {
        key: 'Courses',
        text: 'Courses',
        value: 'Courses',
        image: { avatar: true, src: coursesPic }
    },
    {
        key: 'Circulation',
        text: 'Circulation',
        value: 'Circulation',
        image: { avatar: true, src: circulationPic }
    },
    {
        key: 'History',
        text: 'History',
        value: 'History',
        image: { avatar: true, src: historyPic }
    }
];

export const catalogSortingOptions = [
    {
        key: 'title',
        text: 'title',
        value: 'title'
    },
    {
        key: 'author',
        text: 'author',
        value: 'author'
    },
    {
        key: 'price',
        text: 'price',
        value: 'price'
    },
    {
        key: 'edition',
        text: 'edition',
        value: 'edition'
    }
];

export const patronSortingOptions = [
    {
        key: 'idNum',
        text: 'Patron ID',
        value: 'idNum'
    },
    {
        key: 'firstName',
        text: 'First Name',
        value: 'firstName'
    },
    {
        key: 'lastName',
        text: 'Last Name',
        value: 'lastName'
    },
    {
        key: 'status',
        text: 'Status',
        value: 'status'
    }
];


export const courseSortingOptions = [
    {
        key: 'id',
        text: 'id',
        value: 'id'
    },
    {
        key: 'crsCde',
        text: 'crsCde',
        value: 'crsCde'
    },
    {
        key: 'trmCde',
        text: 'trmCde',
        value: 'trmCde'
    },
    {
        key: 'yrCde',
        text: 'yrCde',
        value: 'yrCde'
    }
];

export const sortingTypes = [
    {
        key: 'asc',
        text: 'asc',
        value: 'asc'
    },
    {
        key: 'desc',
        text: 'desc',
        value: 'desc'
    }
];

export const elementsPerPage = [
    {
        key: '5',
        text: '5',
        value: '5'
    },
    {
        key: '10',
        text: '10',
        value: '10'
    },
    {
        key: '15',
        text: '15',
        value: '15'
    },
    {
        key: '25',
        text: '25',
        value: '25'
    },
    {
        key: '50',
        text: '50',
        value: '50'
    },
    {
        key: '100',
        text: '100',
        value: '100'
    }
];
