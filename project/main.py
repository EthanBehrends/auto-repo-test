
import gym
import numpy as np

def reinforce(env):
    # Parameters
    num_episodes = 5000
    learning_rate = 0.0025
    gamma = 0.99

    # Initialize policy
    policy = np.ones([env.nS, env.nA]) / env.nA

    for i_episode in range(num_episodes):
        # Generate an episode
        episode = []
        state = env.reset()
        for t in range(100):
            action = np.random.choice(np.arange(env.nA), p=policy[state])
            next_state, reward, done, _ = env.step(action)
            episode.append((state, action, reward))
            if done:
                break
            state = next_state

        # Update policy
        for i, (state, action, reward) in enumerate(episode):
            G = sum([x[2]*(gamma**i) for i,x in enumerate(episode[i:])])
            policy[state][action] = policy[state][action] + learning_rate*(gamma**i)*G*(1 - policy[state][action])

    return policy

env = gym.make('CartPole-v0')
policy = reinforce(env)
