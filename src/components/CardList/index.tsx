import React, {useEffect} from 'react';
import {Text, View, FlatList} from 'react-native';
import Questions from '../Questions';
import {useAppSelector} from '../../hooks/reduxHooks';
import {styles} from './style';

interface Props {
    title: string;
}

const CardList = ({title}: Props) => {
    const questionList = useAppSelector(state => state.questions.questionsList);

    return (
        <>
            <Text style={styles.headerText}>{title}</Text>
            <FlatList
                horizontal
                ItemSeparatorComponent={() => <View style={styles.flatlistSeparator} />}
                data={questionList}
                style={styles.flatlist}
                renderItem={({item}) => <Questions key={item.id} imageURL={item.image_uri} title={item.title} />}
                contentContainerStyle={styles.flatlistContentContainer}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => String(item.id)}
            />
        </>
    );
};

export default CardList;
