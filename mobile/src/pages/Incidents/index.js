import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';
import styles from './styles';
import api from '../../services/api';
import { RotationGestureHandler } from 'react-native-gesture-handler';

export default function Incidents() {
    const [incidents, setIcidents] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    function navigateToDetail(incident) {
       navigation.navigate('Detail', { incident });
    }

    async function loadaIncidents() {
     if (loading) {
        return;
     }

     if (total > 0 && incidents.length == total) {
        return;
     }

     setLoading(true);

     const response = await api.get('incidents', {
         params: {page}
     });

     setIcidents([ ...incidents, ...response.data]); // anexar dois vetores
     setTotal(response.headers['x-total-count']);
     setPage(page + 1);
     setLoading(false);

    }
    useEffect(() => {
        loadaIncidents();
    }, []);

    return (        
        <View style={styles.conteiner}>
           <View style={styles.header}>
             <Image source={logoImg} />
             <Text style={styles.headerText}>
                 Total de <Text style={styles.headerTextBold}>{total} casos </Text>. 
             </Text>
           </View>       
            <Text style={styles.title}>
                Bem-vindo!
            </Text>
            <Text style={styles.description}>
                Escolha um dos casos abaixo e salve o dia.
            </Text>
            
            <FlatList 
               data={incidents}
               style={styles.incidentList}
               keyExtractor={incident => String(incident.id)}
               showsVerticalScrollIndicator={false}
               onEndReached={loadaIncidents}
               onEndReachedThreshold={0.2}
               renderItem={({ item : incident }) => (
                <View style={styles.incident}>
                <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
                <Text style={styles.incidentValue}>{incident.name}</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>{
                   Intl.NumberFormat('pt-br', 
                        {
                          style: 'currency',                          
                          currency: 'BRL'}).format(incident.value) 
                         }
                </Text>

                    <TouchableOpacity
                        style={styles.detailsButton}
                        onPress={() => navigateToDetail(incident)} >
                    <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>       
                    <Feather name="arrow-right" size={16} color="#E02041" />
                    </TouchableOpacity>
                </View>
               )}
            />           
        </View>  
    );  
}