from django.test import TestCase
from .models import User, Team, Activity, Leaderboard, Workout

class UserModelTest(TestCase):
    def test_create_user(self):
        user = User.objects.create(name='Bruce Wayne', email='bruce@dc.com', team='dc')
        self.assertEqual(user.name, 'Bruce Wayne')
        self.assertEqual(user.email, 'bruce@dc.com')
        self.assertEqual(user.team, 'dc')

class TeamModelTest(TestCase):
    def test_create_team(self):
        team = Team.objects.create(name='marvel', members=['Tony Stark', 'Steve Rogers'])
        self.assertEqual(team.name, 'marvel')
        self.assertIn('Tony Stark', team.members)

class ActivityModelTest(TestCase):
    def test_create_activity(self):
        activity = Activity.objects.create(user='Bruce Wayne', activity_type='Running', duration=30, date='2026-02-18')
        self.assertEqual(activity.activity_type, 'Running')

class LeaderboardModelTest(TestCase):
    def test_create_leaderboard(self):
        lb = Leaderboard.objects.create(team='marvel', points=100)
        self.assertEqual(lb.team, 'marvel')
        self.assertEqual(lb.points, 100)

class WorkoutModelTest(TestCase):
    def test_create_workout(self):
        workout = Workout.objects.create(name='Pushups', description='Upper body exercise', difficulty='Easy')
        self.assertEqual(workout.name, 'Pushups')
