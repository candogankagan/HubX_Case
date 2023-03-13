import React, {useEffect} from 'react';
import {View, StatusBar, FlatList} from 'react-native';
import {setQuestions} from '../../store/questions/action';
import {setCategories} from '../../store/categories/action';
import {styles} from './styles';
import Categories from '../../components/Categories';
import Premium from '../../components/Premium';
import CardList from '../../components/CardList';
import HomeHeader from '../../components/HomeHeader';
import {useAppSelector, useAppDispatch} from '../../hooks/reduxHooks';

const HomeScreen = () => {
    const dispatch = useAppDispatch();
    const categoriesList = useAppSelector(state => state.categories.categoriesList);

    useEffect(() => {
        fetch('https://dummy-api-jtg6bessta-ey.a.run.app/getQuestions')
            .then(response => response.json())
            .then(data => {
                dispatch(setQuestions(data));
            });
        fetch('https://dummy-api-jtg6bessta-ey.a.run.app/getCategories')
            .then(response => response.json())
            .then(data => {
                dispatch(setCategories(data.data));
            });
    }, []);

    return (
        <FlatList
            ListHeaderComponent={
                <View style={styles.container}>
                    <StatusBar barStyle="dark-content" />
                    <HomeHeader />
                    <Premium />
                    <CardList title={'Get Started'} />
                </View>
            }
            ItemSeparatorComponent={() => <View style={styles.flatlistSeparator} />}
            data={categoriesList}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            renderItem={({item}) => <Categories key={item.id} imageURL={item.image.url} title={item.title} />}
            contentContainerStyle={styles.flatlistContentContainer}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => String(item.id)}
        />
    );
};

export default HomeScreen;
