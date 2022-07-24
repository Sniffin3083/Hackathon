import React, { useState } from 'react'
import styled from 'styled-components';
import Category from '../Category';
import _categories from '../../categories.json'

const categories = _categories as {
    category: [
        {
            categoryID: number;
            categoryName: string;
        }
    ];
    subcategory: [
        {
            subcategoryID: number;
            subcategoryName: string;
            categoryID: number;
        }
    ];
}

const CategoriesContainer = styled.div`
padding: .2em;
display: flex;
gap: 1em;
overflow-x: scroll;
`

type CategoriesProps = {
    categoriesData?: any[];
}


const subcategories = [
    [
        'Sub 1',
        'Sub 1',
        'Sub 1',
        'Sub 1',
    ],
    [
        'Sub 2',
        'Sub 2',
        'Sub 2',
        'Sub 2',
    ],
    [
        'Sub 3',
        'Sub 3',
        'Sub 3',
        'Sub 3',
    ],
    [
        'Sub 4',
        'Sub 4',
        'Sub 4',
        'Sub 4',
    ],
    [
        'Sub 5',
        'Sub 5',
        'Sub 5',
        'Sub 5',
    ],
]

const Categories = ({categoriesData}: CategoriesProps) => {
    const [currentCategory, setCurrentCategory] = useState<{
        id: number;
        categoryName: string;
        subcategory: number
    } | null>(null);

    return (
        <>
        <CategoriesContainer>
            {[...new Array(4)].map((_, i) => (
                <Category 
                active={!currentCategory || currentCategory.id === i} 
                key={i} 
                image={'category' + (i + 1)} 
                name={categories.category[i].categoryName}
                onClick={ () => {
                    console.log(!currentCategory || currentCategory.id === i)
                    console.log(typeof categories)
                    if(currentCategory?.id === i) {
                        setCurrentCategory(null)
                    } else {
                        setCurrentCategory({
                            id: i,
                            categoryName: 'Category',
                            subcategory: i
                        })
                    }
                }} />
            ))}
        </CategoriesContainer>
        <CategoriesContainer>
            {currentCategory && categories.subcategory.filter((e) => e.categoryID - 1 === currentCategory.id).map((el, i) => (
                <Category active key={i} image={'subcategory' + (el.subcategoryID)} name={el.subcategoryName}
                onClick={ () => {
                }} />
            ))}
        </CategoriesContainer>
        </>
    )
}

export default Categories;