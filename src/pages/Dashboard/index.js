import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaChevronRight } from 'react-icons/fa';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, Content, Header, Meetup } from './styles';
import Button from '~/components/Button';

import api from '~/services/api';
import history from '~/services/history';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('organized');

      const formattedMeetups = response.data.map(meetup => {
        meetup.formattedDate = format(
          parseISO(meetup.date),
          "d 'de' MMMM, 'às' HH':'mm",
          { locale: pt }
        );
        return meetup;
      });
      setMeetups(formattedMeetups);
    }
    loadMeetups();
  }, []);

  return (
    <Container>
      <Content>
        <Header>
          <h1>Dashboard</h1>
          <Button type="button" onClick={() => history.push('/meetup/create')}>
            <div>
              <FaPlus color="#fff" />
              Novo Meetup
            </div>
          </Button>
        </Header>
        <ul>
          {meetups.map(meetup => (
            <Meetup key={meetup.id}>
              <Link to={`/details/${meetup.id}`}>
                <strong>{meetup.name}</strong>
                <div>
                  <time>{meetup.formattedDate}</time>
                  <FaChevronRight color="#999" />
                </div>
              </Link>
            </Meetup>
          ))}
        </ul>
      </Content>
    </Container>
  );
}
