import { selector } from 'recoil';

import { productsState } from './atom';
import { criterionState } from '../filter/atom'

export const productsStatus = selector({
    key: 'productsStatus',
    get: ({ get }) => {
        const products = get(productsState);
        if(!products) return;
        return {
            totalProductNum: products.length,
        };
    }
});

export const topRatedSelector = selector({
    key: 'topRatedSelector',
    get: ({ get }) => {
        const products = get(productsState);

        const topRated = products.reduce((result, current) => {
            if(result.rating.rate > current.rating.rate){
                return result;
            } else {
                return current;
            }
        }, {rating: {rate: 0}});

        return topRated;
    }
});

export const lowestRatedSelector = selector({
    key: 'lowestRatedSelector',
    get: ({ get }) => {
        const products = get(productsState);

        const lowestRated = products.reduce((result, current) => {
            if(result.rating.rate < current.rating.rate){
                return result;
            } else {
                return current;
            }
            // 5 is full rate
        }, {rating: {rate: 5}});
        return lowestRated;
    }
});

export const productsSelector = selector({
    key: 'productsSelector',
    get: ({ get }) => {
        const products = get(productsState);
        const filterCriteria = get(criterionState);
        
        if(!products) return;

        let results = [...products];

        if(filterCriteria.hasOwnProperty('category')) {
            const target = filterCriteria.category;
            results = results.filter(product => {
                return product.category === target;
            });
        }

        if(filterCriteria.hasOwnProperty('keywords')){
            const keywords = filterCriteria.keywords;
            let targetList = [];
            if(keywords.includes(' ')){
                targetList = keywords.split(' ');
            } else {
                targetList.push(keywords);
            }
            results = results.filter(product => {
                return targetList.some(keyword => (
                    product.title.toLowerCase().includes(keyword.toLowerCase())
                ))
            });
        }
        if(filterCriteria.hasOwnProperty('rating')){
            results = products.filter(product => product.rating.rate >= parseFloat(filterCriteria.rating));
        }
        return results;
    }
});