import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetailsPage() {
  return (
    <>
      <MeetupDetail
        image='https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
        title='A First Meetup'
        address='Some addewss 5, 12345 City'
        description='This is a Meetup Description'
      />
    </>
  );
}

export default MeetupDetailsPage;
